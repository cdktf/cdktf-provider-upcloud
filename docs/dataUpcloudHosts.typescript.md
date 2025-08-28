# `dataUpcloudHosts` Submodule <a name="`dataUpcloudHosts` Submodule" id="@cdktf/provider-upcloud.dataUpcloudHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudHosts <a name="DataUpcloudHosts" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/hosts upcloud_hosts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

new dataUpcloudHosts.DataUpcloudHosts(scope: Construct, id: string, config?: DataUpcloudHostsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig">DataUpcloudHostsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig">DataUpcloudHostsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.resetHosts">resetHosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putHosts` <a name="putHosts" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.putHosts"></a>

```typescript
public putHosts(value: IResolvable | DataUpcloudHostsHosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.putHosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>[]

---

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.resetHosts"></a>

```typescript
public resetHosts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudHosts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isConstruct"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

dataUpcloudHosts.DataUpcloudHosts.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isTerraformElement"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

dataUpcloudHosts.DataUpcloudHosts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isTerraformDataSource"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

dataUpcloudHosts.DataUpcloudHosts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.generateConfigForImport"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

dataUpcloudHosts.DataUpcloudHosts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudHosts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.hosts">hosts</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList">DataUpcloudHostsHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.hostsInput">hostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.hosts"></a>

```typescript
public readonly hosts: DataUpcloudHostsHostsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList">DataUpcloudHostsHostsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.hostsInput"></a>

```typescript
public readonly hostsInput: IResolvable | DataUpcloudHostsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHosts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudHostsConfig <a name="DataUpcloudHostsConfig" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

const dataUpcloudHostsConfig: dataUpcloudHosts.DataUpcloudHostsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.hosts">hosts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>[]</code> | hosts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsConfig.property.hosts"></a>

```typescript
public readonly hosts: IResolvable | DataUpcloudHostsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>[]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/hosts#hosts DataUpcloudHosts#hosts}

---

### DataUpcloudHostsHosts <a name="DataUpcloudHostsHosts" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

const dataUpcloudHostsHosts: dataUpcloudHosts.DataUpcloudHostsHosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts.property.statistics">statistics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>[]</code> | statistics block. |

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts.property.statistics"></a>

```typescript
public readonly statistics: IResolvable | DataUpcloudHostsHostsStatistics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>[]

statistics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.1/docs/data-sources/hosts#statistics DataUpcloudHosts#statistics}

---

### DataUpcloudHostsHostsStatistics <a name="DataUpcloudHostsHostsStatistics" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

const dataUpcloudHostsHostsStatistics: dataUpcloudHosts.DataUpcloudHostsHostsStatistics = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudHostsHostsList <a name="DataUpcloudHostsHostsList" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

new dataUpcloudHosts.DataUpcloudHostsHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.get"></a>

```typescript
public get(index: number): DataUpcloudHostsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudHostsHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>[]

---


### DataUpcloudHostsHostsOutputReference <a name="DataUpcloudHostsHostsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

new dataUpcloudHosts.DataUpcloudHostsHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.putStatistics">putStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.resetStatistics">resetStatistics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatistics` <a name="putStatistics" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.putStatistics"></a>

```typescript
public putStatistics(value: IResolvable | DataUpcloudHostsHostsStatistics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.putStatistics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>[]

---

##### `resetStatistics` <a name="resetStatistics" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.resetStatistics"></a>

```typescript
public resetStatistics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.hostId">hostId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.statistics">statistics</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList">DataUpcloudHostsHostsStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.windowsEnabled">windowsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.statisticsInput">statisticsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.hostId"></a>

```typescript
public readonly hostId: number;
```

- *Type:* number

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: DataUpcloudHostsHostsStatisticsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList">DataUpcloudHostsHostsStatisticsList</a>

---

##### `windowsEnabled`<sup>Required</sup> <a name="windowsEnabled" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.windowsEnabled"></a>

```typescript
public readonly windowsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.statisticsInput"></a>

```typescript
public readonly statisticsInput: IResolvable | DataUpcloudHostsHostsStatistics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudHostsHosts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHosts">DataUpcloudHostsHosts</a>

---


### DataUpcloudHostsHostsStatisticsList <a name="DataUpcloudHostsHostsStatisticsList" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

new dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.get"></a>

```typescript
public get(index: number): DataUpcloudHostsHostsStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudHostsHostsStatistics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>[]

---


### DataUpcloudHostsHostsStatisticsOutputReference <a name="DataUpcloudHostsHostsStatisticsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer"></a>

```typescript
import { dataUpcloudHosts } from '@cdktf/provider-upcloud'

new dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudHostsHostsStatistics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudHosts.DataUpcloudHostsHostsStatistics">DataUpcloudHostsHostsStatistics</a>

---



